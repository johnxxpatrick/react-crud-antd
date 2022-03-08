import React, { useState } from "react";
import { IBaseUser } from "./interface";
import validator, { noErrors, FormErrors } from "../validator";
import { Button, Form, Input, Row } from 'antd'

interface IProps {
  onAddUser: (user: IBaseUser) => void;
}
const initUser = { address: "", name: "", age: "" };
const AddUserForm: React.FunctionComponent<IProps> = props => {
  const [formValue, setFormValue] = useState(initUser);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form] = Form.useForm();
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rules = [
      { key: "name", required: true, label: "Name" },
      { key: "address", required: true, label: "address" },
      { key: "age", required: true, label: "Age" },
      { key: "name", maxLength: 16, label: "name" },
      { key: "name", minLength: 4, label: "name" },
      { key: "age", minValue: 18, label: "Age" },
      { key: "age", maxValue: 60, label: "Age" }
    ];
    validator(
      formValue,
      rules,
      (errors: any): any => {
        if (noErrors(errors)) {
          props.onAddUser(formValue);
          setFormValue(initUser);
          return false;
        }
        setErrors(errors);
      }
    );
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="user-form">
      <h1>ADD USER</h1>
        {/* <Form
            className="form-edit"
            form={form}
            layout="vertical">
            <Form.Item label="Name">
                <Input 
                    placeholder="Enter name" 
                    value={formValue.name}
                    onChange={onInputChange} />
            </Form.Item>
            <Form.Item label="Address">
                <Input 
                    placeholder="Enter address" 
                    value={formValue.address}
                    onChange={onInputChange} />
            </Form.Item>
            <Form.Item label="Age">
                <Input 
                    placeholder="Enter age" 
                    value={formValue.age}
                    onChange={onInputChange} />
            </Form.Item>
            <Form.Item>
                <Button type="primary"/>
            </Form.Item>
        </Form> */}
      <form className="form-edit" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label>Name</label>
          <input
            type="text"
            placeholder="please input name"
            name="name"
            value={formValue.name}
            onChange={onInputChange}
          />
          {errors["name"] && errors["name"].length > 0 && (
            <div className="form-error">{errors["name"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <label>Address</label>
          <input
            type="text"
            placeholder="please input address"
            name="address"
            value={formValue.address}
            onChange={onInputChange}
          />
          {errors["address"] && errors["address"].length > 0 && (
            <div className="form-error">{errors["address"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <label>Age</label>
          <input
            type="number"
            placeholder="please input age"
            name="age"
            value={formValue.age}
            onChange={onInputChange}
          />
          {errors["age"] && errors["age"].length > 0 && (
            <div className="form-error">{errors["age"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <button>Add new user</button>
        </div>
      </form>
    </div>
  );
};
export default AddUserForm;
