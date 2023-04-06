import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BRANCH_TITLE_FIELD } from "./BranchTitle";

export const BranchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="img" source="img" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Event" target="BranchId" label="Events">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Branch"
              source="branch.id"
              reference="Branch"
            >
              <TextField source={BRANCH_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="End date" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="img" source="img" />
            <TextField label="Start date" source="startDate" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Venue" source="venue" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="BranchId" label="Users">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Branch"
              source="branch.id"
              reference="Branch"
            >
              <TextField source={BRANCH_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
            <TextField label="USN" source="usn" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
