// import React from 'react';
// import {withStyles} from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
// import DialogTabs from "./components/DialogTabs";
//
// import {makeStyles} from "@material-ui/core";
// import TabPanel from "./components/TabPanel";
// import Account from "./components/Tabs/Account";
//
// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });
// const DialogTitle = withStyles(styles)((props) => {
//   const {children, classes, onClose, ...other} = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon/>
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });
//
// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);
//
// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);
// ///------------------------------------------------------------
//
// const useStyles = makeStyles(theme => ({
//   titleText: {
//     fontSize: '20px',
//   },
//   dialog: {
//     width: "700px",
//     height: "800px",
//   },
//   dialogContent: {
//     width: "600px",
//     height: "700px",
//     padding: 0,
//   }
// }))
//
// const MainDialog = (props) => {
//
//   const classes = useStyles();
//
//   const {handleClose, open} = props;
//
//   const [tabValue, setValue] = React.useState(0);
//
//   const handleChangeTabIndex = (event, newValue) => {
//     setValue(newValue);
//   };
//
//   return (
//     <Dialog onClose={handleClose}
//             open={open}
//             aria-labelledby="customized-dialog-title"
//       // className={classes.dialog}
//     >
//       <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//         <Typography className={classes.titleText} variant="overline">Настройки</Typography>
//       </DialogTitle>
//
//       <DialogTabs value={tabValue} handleChange={handleChangeTabIndex}/>
//
//       <DialogContent dividers className={classes.dialogContent}>
//
//         <TabPanel value={tabValue} index={0}>
//           <Account/>
//         </TabPanel>
//
//         <TabPanel value={tabValue} index={1}>
//           Помощь
//         </TabPanel>
//
//       </DialogContent>
//
//       <DialogActions>
//         <Button autoFocus onClick={handleClose} color="primary">
//           Сохранить изменения
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }
//
// export default MainDialog;
