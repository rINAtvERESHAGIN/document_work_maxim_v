import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {
  Avatar, Button, List, ListItem, Tooltip, ListItemText,
  ListItemIcon, TextField, FormControl,
  IconButton,
} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import WarningIcon from '@material-ui/icons/Warning';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import {useSelector} from "react-redux";

const AccountLayout = styled.div``;
const AvatarBlock = styled.div``;
const AvatarButton = styled.div``;
const PersonalDataBlock = styled.div``;
const ActionBlock = styled.div``;

const ListAction = styled.div``;
const ListContent = styled.div``;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  mainList: {
    width: "100%",
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: '35px',
    paddingRight: '35px',

  },
  avatarBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: '50px',
    paddingTop:"10px",


  },
  avatarButton: {
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    width: "112px",
    height: "112px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
  },

  personalDataBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: "100%",
  },

  listAction: {
    marginLeft: theme.spacing(1),
  },
  listContent: {
    flexGrow: 1,
  }
}));

const Account = props => {

  const classes = useStyles();
  // const user = useSelector(state => state.auth.user) === null ? {name: ''} : useSelector(state => state.auth.user)
  const {user} = useSelector(state => state.auth);

  const accountFields = {
    "firstname": {
      fieldProps: {
        id: "firstname",
        label: `Имя`,
        autoFocus: true,
        size: 'medium',
        value: '',
        type: "text",
        fullWidth: true,
        name: 'fieldName',
      },
      icons: {
        "personalIcon": <PersonOutlineIcon/>,
        "statusIcon": {
          icon: <WarningIcon color="error"/>,
          tooltip: 'Нет имени'
        }
      },
      uiRepresent: {
        showingField: false,
      },
      itemText: {
        primary: 'Имя',
        secondary: 'У вас не указано имя',
        userValue: '',
      },
      buttons: [
        {
          tooltip: {
            title: "Изменить"
          },
          iconImg: <EditIcon/>,
        },
      ],
    },
    "surname": {
      fieldProps: {
        id: "surname",
        label: `Фамилия`,
        autoFocus: true,
        size: 'small',
        value: '',
        type: "text",
        fullWidth: true,
        name: 'fieldName',
      },
      icons: {
        "personalIcon": <PersonOutlineIcon/>,
        "statusIcon": {
          icon: <WarningIcon color="error"/>,
          tooltip: 'Нет фамилии'
        }
      },
      uiRepresent: {
        showingField: false,
      },
      itemText: {
        primary: 'Фамилия',
        secondary: 'У вас не указана фамилия',
        userValue: '',
      },
      buttons: [
        {
          tooltip: {
            title: "Изменить"
          },
          iconImg: <EditIcon/>,
        },
      ],
    },
    "username": {
      fieldProps: {
        id: "username",
        label: `Пользовательское имя`,
        autoFocus: true,
        size: 'small',
        value: '',
        type: "text",
        fullWidth: true,
        name: 'fieldName',
      },
      icons: {
        "personalIcon": <PersonOutlineIcon/>,
        "statusIcon": {
          icon: <WarningIcon color="error"/>,
          tooltip: 'Нет пользовательского имени'
        }
      },
      uiRepresent: {
        showingField: false,
      },
      itemText: {
        primary: 'Имя пользователя',
        secondary: 'У вас не указано имя пользователя',
        userValue: user.username,
      },
      buttons: [
        {
          tooltip: {
            title: "Изменить"
          },
          iconImg: <EditIcon/>,
        },
      ],
    },
    "email": {
      fieldProps: {
        id: "email",
        label: `Электронный адрес`,
        autoFocus: true,
        size: 'small',
        value: '',
        type: "text",
        fullWidth: true,
        name: 'fieldName',
      },
      icons: {
        "personalIcon": <PersonOutlineIcon/>,
        "statusIcon": {
          icon: <WarningIcon color="error"/>,
          tooltip: 'Нет электронного адресса'
        }
      },
      uiRepresent: {
        showingField: false,
      },
      itemText: {
        primary: 'Email',
        secondary: 'У вас не указано email',
        userValue: user.email,
      },
      buttons: [
        {
          props: {
            disabled: true
          },
          tooltip: {
            title: "Подтвердить email"
          },
          iconImg: <CheckIcon/>,
        },
        {
          props: {
            disabled: true
          },
          tooltip: {
            title: "Изменить"
          },
          iconImg: <EditIcon/>,
        },
      ],
    },

  };

  const accountFieldsCollection = ['firstname', 'surname', 'username', 'email',];
  // const accountFieldsCollection = ['firstname',];

  const handleKeyDown = (event, fieldId) => {
    if (!event || !fieldId) {
      return;
    }

    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }

    const key = event.key;

    if (!key) {
      return;
    }

    if (key === "Escape") {
      this.hideFields();
    } else if (key === "Enter") {
      this.changeField(fieldId);
    }
  };

  return (
    <AccountLayout className={classes.root}>

      <AvatarBlock className={classes.avatarBlock}>
        <AvatarButton className={classes.avatarButton}>
          <Avatar className={classes.avatar}>Р</Avatar>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ImageIcon/>}
            disabled
          >
            ВЫБЕРИТЕ...
          </Button>
        </AvatarButton>
      </AvatarBlock>

      <PersonalDataBlock className={classes.personalDataBlock}>
        <List className={classes.mainList}>
          {accountFieldsCollection.map((fieldId, index) => (
            <ListItem className={classes.listItem}>

              <ListItemIcon>
                {accountFields[fieldId].icons.personalIcon}
              </ListItemIcon>


              {((show) => {
                if (!Boolean(show)) {
                  return (
                    <ListItemIcon>
                      <Tooltip title={accountFields[fieldId].icons.statusIcon.tooltip}>
                        {accountFields[fieldId].icons.statusIcon.icon}
                      </Tooltip>
                    </ListItemIcon>
                  );
                }
              })(accountFields[fieldId].itemText.userValue)}


              <ListContent className={classes.listContent}>
                {((whatShow) => {
                  if (whatShow === "field") {
                    return (
                      <FormControl fullWidth={true} variant="outlined" margin={'normal'}
                                   style={{marginLeft: "5px"}}
                                   key={index}
                      >
                        <TextField {...accountFields[fieldId].fieldProps}
                                   InputLabelProps={{
                                     shrink: true,
                                   }}
                                   variant="outlined"
                                   key={index}
                        />
                      </FormControl>
                    );
                  } else if (whatShow === "value") {
                    return (
                      <ListItemText
                        primary={accountFields[fieldId].itemText.primary}
                        secondary={
                          accountFields[fieldId].itemText.userValue ? accountFields[fieldId].itemText.userValue : accountFields[fieldId].itemText.secondary
                        }
                      />
                    );
                  }
                })("value")}
              </ListContent>

              <ListAction className={classes.listAction}>
                {((canAdd) => {

                  if (!canAdd) {
                    return (
                      <Button
                        color="primary"
                        size="small"
                        // disabled={performingAction}
                        variant="contained"
                        // onClick={() => this.showField("first-name")}
                      >
                        Добавить
                      </Button>
                    );
                  } else {
                    return (
                      accountFields[fieldId].buttons.map((button, index) => (
                        <Tooltip title={button.tooltip.title}>
                          <IconButton {...button.props}
                            // disabled={performingAction}
                            // onClick={() => this.showField("first-name")}
                          >
                            {button.iconImg}
                          </IconButton>
                        </Tooltip>
                      ))
                    );
                  }

                })(accountFields[fieldId].itemText.userValue)}

              </ListAction>
            </ListItem>
          ))}
        </List>

      </PersonalDataBlock>

      <ActionBlock>

      </ActionBlock>
    </AccountLayout>
  )
};


export default Account;
