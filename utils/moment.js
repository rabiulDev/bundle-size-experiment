import moment from 'moment'

export const convertDatetimeToLocal = (dateTime) => {
      return moment.utc(dateTime).local().format('DD MMM, YYYY')
}

export const convertDatetimeToServerFormat = (dateTime) => {
      return dateTime.utc().toJSON()
}

export const convertHour = (time) => {
      const formatStr = 'HH:mm:ss';
      const hourStr = moment(time, formatStr);
      return  hourStr.format('hh:mm A')
}

export const convertHourToAntdForm = (time) => {
      const formatStr = 'HH:mm:ss';
      const utcStr = moment.utc(time, formatStr);
      return utcStr.format()
}