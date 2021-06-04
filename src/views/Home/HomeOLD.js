import React, {Component} from "react";
import {Fade, Grid, Slug} from "mauerwerk";
import data from "./data";
import {CloseOutlined} from "@ant-design/icons";
import lodash from "lodash";
import "./styles/styles.css";
import ScheduleCalendar from "../Schedule/Calendar/ScheduleCalendar";
import {connect, useSelector} from "react-redux";
import DenseTable from "./testComponents/DenseTable";
import {Collapse} from "@material-ui/core";

const Cell = ({toggle, name, height, description, css, maximized}) => {
  return (
    <div
      className="cell"
      style={{
        backgroundImage: css,
        // backgroundImage: 'linear-gradient(-225deg, #E3FDF5 0%, #e0f7fa 100%)',
        // backgroundColor: "#aec4c7",
        cursor: !maximized ? 'pointer' : 'auto'
      }}
      onClick={!maximized ? toggle : undefined}
      // onClick={() => (console.log('click'))}
    >

      {((value) => {
        switch (value) {
          case "Расписание":
            return (<Collapse in={!maximized} unmountOnExit><DenseTable/></Collapse>)
          case "Пожелания сотрудников":
            return (<div/>)
          case "Группы кафедры":
            return (<div/>)
          case"Группы деканата":
            return (<Collapse in={!maximized} unmountOnExit><ScheduleCalendar/></Collapse>)
          case "Конструктор расписания":
            return (<div/>)
        }
      })(name)}


      {/*что будет показывать когда пользователь нажал
    все что находится выше будет отображаться в компоненете*/}

      <Fade show={maximized} delay={maximized ? 400 : 0}>
        <div className="details">
          <Slug delay={600}>
            <div className="close">
              <CloseOutlined style={{cursor: 'pointer'}} onClick={toggle}/>
            </div>
            <h1>{name}</h1>
            <p>{description}</p>

            {((value) => {
              switch (value) {
                case "Расписание":
                  return (<Collapse in={maximized} unmountOnExit><DenseTable/></Collapse>)
                case "Пожелания сотрудников":
                  return (<div/>)
                case "Группы кафедры":
                  return (<div/>)
                case"Группы деканата":
                  return (<Collapse in={maximized} unmountOnExit><ScheduleCalendar/></Collapse>)
                case "Конструктор расписания":
                  return (<div/>)
              }
            })(name)}

          </Slug>
        </div>
      </Fade>

      <Fade
        show={!maximized}
        from={{opacity: 0, transform: 'translate3d(0,140px,0)'}}
        enter={{opacity: 1, transform: 'translate3d(0,0px,0)'}}
        leave={{opacity: 0, transform: 'translate3d(0,-50px,0)'}}
        delay={maximized ? 0 : 400}
      >
        <div className="default">{name}</div>

      </Fade>
    </div>
  )
}


class HomeOLD extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      columns: 2,
      margin: 0,
      filter: '',
      height: true
    }
  }

  // state = {data: data, columns: 2, margin: 0, filter: '', height: true};
  search = e => this.setState({filter: e.target.value});
  shuffle = () => this.setState(state => ({data: lodash.shuffle(state.data)}));

  setColumns = e => this.setState({columns: parseInt(e.key)});
  setMargin = e => this.setState({margin: parseInt(e.key)});
  setHeight = e => this.setState({height: e});

  /*он просто рендерит все что ему придет, поэтому я могу создать массив того, что хочу ему показать
  * */
  render() {
    const data = this.state.data.filter(
      d => d.name.toLowerCase().indexOf(this.props.searchSection) !== -1
    );

    return (
      <div className="main">
        <Grid
          className="grid"
          data={data}
          keys={d => d.name}
          heights={this.state.height ? d => d.height : 200}
          columns={this.state.columns}
          margin={20}
          lockScroll={true}
          closeDelay={100}
        >
          {(data, maximized, toggle) => (
            <Cell {...data} maximized={maximized} toggle={toggle}/>
          )}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchSection: state.utils.searchSection
});

export default connect(mapStateToProps, null)(HomeOLD);
