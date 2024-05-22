import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

export default function BasicInput({ placeholder, icon }) {
  return (
    <div className="flex gap-3">
      <IconField iconPosition="left">
        <InputIcon className={icon}> </InputIcon>
        <InputText v-model="value1" placeholder={placeholder} />
      </IconField>
    </div>
  );
}
