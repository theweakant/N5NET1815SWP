import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function SearchBar({ placeholder, icon }) {
  return (
    <div>
      <form className="p-inputgroup flex-1">
        <InputText placeholder={placeholder} />
        <Button icon={icon} className="p-button button-search" type="submit" />
      </form>
    </div>
  );
}
