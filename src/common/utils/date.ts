import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export const getLocalTz = () => {
  return 'UTC+' + (0 - new Date().getTimezoneOffset() / 60)
}

export const convertUTCDateToLocalDate = (
  date: string | Date,
  formatter = 'YYYY-MM-DD HH:mm:ss'
) => {
  return dayjs.utc(date).local().format(formatter)
}
