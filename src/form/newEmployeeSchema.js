module.exports = {
  formOptions: {
    validateAfterLoad: true,
    validateAfterChanged: true,
    validateAsync: true
  },
  schema: {
    groups: [
      {
        legend: "Personal",
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "ID (disabled text field)",
            model: "id",
            readonly: true,
            disabled: true
          },
          {
            type: "input",
            inputType: "text",
            label: "First & Last Name",
            model: "name",
            id: "name",
            placeholder: "Employee Name",
            featured: true,
            required: true
          },
          {
            type: "pikaday",
            label: "Birth Date",
            model: "dob",
            id: "dob",
            placeholder: "mm/dd/yyyy",
            pikadayOptions: {
              position: "top left"
            }
          },
          {
            type: "input",
            inputType: "email",
            label: "E-mail",
            model: "email",
            placeholder: "User's e-mail address"
          },
          {
            type: "input",
            inputType: "password",
            label: "Password",
            model: "password",
            min: 6,
            required: true,
            hint: "Minimum 6 characters",
            validator: "string"
          }
        ]
      },
      {
        legend: "Skills & Status",
        fields: [
          {
            type: "select",
            label: "Skills",
            model: "skills",
            values: ["Javascript", "VueJS", "CSS3", "HTML5"]
          },
          {
            type: "checkbox",
            label: "Status",
            model: "status",
            default: true
          }
        ]
      }
    ]
  }
};
