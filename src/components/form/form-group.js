import React from "react";

import Card from "./card";
import FormItem from "./form-item";
import Heading from "../ui/heading";

const FormGroup = ({ label, group }) => (
  <Card>
    {label && <Heading as="h5">{label}</Heading>}
    {group &&
      group.map((item, i) => {
        const { name, label, required } = item;

        return <FormItem key={i} {...{ label, required, name, item }} />;
      })}
  </Card>
);

export default FormGroup;
