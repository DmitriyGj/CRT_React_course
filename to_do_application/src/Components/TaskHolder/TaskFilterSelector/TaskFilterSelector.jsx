import {Component} from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";

class TaskFilterSelector extends Component{

    render() {
        const options = [{value:(task)=>task, label: 'Все'},
                         {value:(task)=>(task.done===true),  label:'Выполненные'},
                         {value:(task)=>(task.done===false),label:'Текущие'}];

        return (
            <label>Показать
                <select value={this.props.parentFilterValue}
                    onChange={this.props.parentChangeFilterHandler}>
                    {options.map(filter => <option key ={uuid()}  value={filter.value.toString()} label={filter.label}></option>)}
                </select>
            </label>
        );
    }
}

TaskFilterSelector.propTypes={
    parentFilterValue: PropTypes.string,
    parentChangeFilterHandler: PropTypes.func
};

export {TaskFilterSelector};