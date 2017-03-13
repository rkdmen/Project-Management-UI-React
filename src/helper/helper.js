export const unixConverter = function(unix){
      let newDate = new Date(unix * 1000);
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let year = newDate.getFullYear();
      let month = months[newDate.getMonth()];
      let date = newDate.getDate();
      return `${month} ${date}, ${year}`;
}
