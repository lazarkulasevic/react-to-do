import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
    state = {
        item: "",
        list: [],
    };

    handleList = () => {
        const { item, list } = this.state;
        if (!item.match(/\w/)) return;
        this.setState({
            item: item,
            list: [...list, item],
        });
    };

    deleteItem = (event) => {
        event.target.parentElement.remove();
    };

    getList() {
        const { list } = this.state;
        return list.map((item, index) => (
            <li className="Form-li" key={index}>
                <p>{item + " "}</p>
                <button onClick={this.deleteItem}>Delete</button>
            </li>
        ));
    }

    handleChange = (event) => {
        let value = event.target.value;
        this.setState({ item: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.handleList();
        event.target.reset();
        this.setState({ item: "" });
    };

    render() {
        return (
            <div>
                <ul className="Form-ul">{this.getList()}</ul>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="Form-input"
                        placeholder="Enter item..."
                        onChange={this.handleChange}
                    />
                    <input type="submit" className="Form-submit" value="ADD" />
                </form>
            </div>
        );
    }
}

export default Form;
