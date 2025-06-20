module.exports = {
  eq: (a, b) => a === b,
  not: (a) => !a,
  convertToVietnameseDateTime: (dateTime) => {
    const updatedAt = new Date(dateTime);
    const vietnameseDateTime = updatedAt.toLocaleString("vi-VN", {
      day: "2-digit", // Day of the month, 2 digits
      month: "2-digit", // Month, 2 digits
      year: "numeric", // Full year
      hour: "2-digit", // Hour in 2-digit format
      minute: "2-digit", // Minute in 2-digit format
      hour12: true // 12-hour format (AM/PM)
    });
    const [time, period, date] = vietnameseDateTime.split(" ");
    const formattedDateTime = `${time} ${period} ${date}`;
    return formattedDateTime;
  },
  includes: (a, b) => a.includes(b),
  returnDes: (obj, b) => {
    console.log(obj, b);
    if (obj.name == b) {
      return true;
    } else return false;
  }
};
