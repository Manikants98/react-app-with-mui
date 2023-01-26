import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, MenuItem, Select } from "@mui/material";
import classNames from "classnames";
import Text from "../Text";

const CustomSelect = ({
  label,
  menuItem,
  placeholder,
  setValue,
  helperText,
  error,
  ...rest
}) => {
  const handleChange = (event) => {
    setValue?.(event.target.value);
  };
  return (
    <FormControl variant="filled" error={error}>
      <Text className="pb-1 text-xs font-medium ">{label}</Text>
      <Select
        displayEmpty={true}
        inputProps={{
          classes: {
            select:
              "!bg-transparent !text-slate-500 !py-4 !text-left !text-md !font-medium",
          },
        }}
        renderValue={(selected) => {
          if (selected?.length === 0) {
            return <span className="text-black">{placeholder}</span>;
          }
          return selected;
        }}
        classes={{ iconFilled: "!text-zinc-800 !text-3xl" }}
        IconComponent={ExpandMoreIcon}
        onChange={(e) => handleChange(e)}
        className={classNames(
          "!h-10 !bg-white before:!border-b-0 !border after:!border-transparent !rounded",
          error ? "!border-red-400" : "border-primary"
        )}
        {...rest}
      >
        {menuItem &&
          menuItem?.map((menuItem) => {
            return (
              <MenuItem
                key={menuItem?.id}
                value={menuItem?.value}
                className="text-slate-500 !text-xs !font-medium"
              >
                {menuItem.value}
              </MenuItem>
            );
          })}
        {menuItem === null && (
          <MenuItem
            key="0"
            disabled
            className="text-slate-500 !text-xs !font-medium"
          >
            No Data Found
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
