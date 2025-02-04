import { Badge } from '@/Components/ui/badge';
import { STATUS } from '@/lib/utils';

export default function GetStatusBadge({ status }) {
    const { TODO, INPROGRESS, ONREVIEW, DONE, UNKNOWN } = STATUS;

    let badge, text;

    switch (status) {
        case TODO:
            badge = 'bg-red-500 hover:bg-red-600';
            text = 'To Do';
            break;
        case INPROGRESS:
            badge = 'bg-yellow-500 hover:bg-yellow-600';
            text = 'In Progress';
            break;
        case ONREVIEW:
            badge = 'bg-blue-500 hover:bg-blue-600';
            text = 'On Review';
            break;
        case DONE:
            badge = 'bg-green-500 hover:bg-green-600';
            text = 'Done';
            break;
        default:
            badge = '';
            text = 'Unknown';
            break;
    }

    return <Badge className={badge}>{text}</Badge>;
}
