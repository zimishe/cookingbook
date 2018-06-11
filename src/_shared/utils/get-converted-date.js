import moment from 'moment';
import 'moment/locale/uk';

export function getConvertedDate(date) {
    moment.locale('uk')
    return moment(date).format('DD.MM.YYYY, HH:mm:ss')
}