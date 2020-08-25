import { format } from "date-fns";

function formatDate(value) {
  return format(new Date(value), "dd/MM/yyyy");
}
function formatHora(value) {
  return format(new Date(value), "HH:mm");
}

export { formatDate, formatHora };
