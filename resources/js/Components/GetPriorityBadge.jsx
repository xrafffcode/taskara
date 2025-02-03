import { PRIORITY } from "@/lib/utils";
import { Badge } from "@/Components/ui/badge";

export default function GetPriorityBadge({ priority }) {
    const { URGENT, HIGH, MEDIUM, LOW, UNKNOWN } = PRIORITY;

    let badge, text;

    switch (priority) {
        case URGENT:
            badge = 'bg-red-500 hover:bg-red-600';
            text = 'Urgent';
            break;
        case HIGH:
            badge = 'bg-yellow-500 hover:bg-yellow-600';
            text = 'High';
            break;
        case MEDIUM:
            badge = 'bg-blue-500 hover:bg-blue-600';
            text = 'Medium';
            break;
        case LOW:
            badge = 'bg-green-500 hover:bg-green-600';
            text = 'Low';
            break;
        default:
            badge = '';
            text = 'Unknown';
            break;
    }

    return <Badge className={badge}>{text}</Badge>;
}
