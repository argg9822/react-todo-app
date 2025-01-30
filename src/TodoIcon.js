import { ReactComponent as DeleteIcon } from './delete.svg';
import { ReactComponent as AddIcon } from './add.svg';

const iconsype = {
    "delete": <DeleteIcon />,
    "add": <AddIcon />
}

function TodoIcon({ type }) {
  return <>{iconsype[type]}</>;
}

export { TodoIcon };