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
        displayEmpty
        inputProps={{
          classes: {
            Select:
              "!bg-transparent !text-Slate-500 !pb-6 !text-left !text-xs !font-medium",
          },
        }}
        renderValue={(selected) => {
          if (selected?.length === 0) {
            return <span className="text-Slate-500">{placeholder}</span>;
          }
          return selected;
        }}
        classes={{ iconFilled: "!text-Zinc-800 !text-3xl" }}
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
                className="text-slate-500 !textxs !font-medium"
              >
                {menuItem.value}
              </MenuItem>
            );
          })}
        {menuItem === null && (
          <MenuItem
            key="0"
            disabled
            className="text-slate-500 !textxs !font-medium"
          >
            No Data Found
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
