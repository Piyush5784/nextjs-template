import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface dropdownProps {
  triggerText: string;
  items: string[];
}
const Dropdown = ({ triggerText, items }: dropdownProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>{triggerText}</DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator /> */}

          {items.map((option, i) => (
            <DropdownMenuItem key={i}>{option}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
