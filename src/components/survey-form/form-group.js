import React from "react";

import Card from "../card";
import FormItem from "./form-item";

const FormGroup = ({ label, group }) => (
  <Card>
    {label && <h3>{label}</h3>}
    {group &&
      group.map((item, i) => {
        const { name, label, required } = item;

        return <FormItem key={i} {...{ label, required, name, item }} />;
      })}
  </Card>
);

export default FormGroup;
