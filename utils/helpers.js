module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  get_emoji: (review) => {
    // const review= Math.floor();

    // Return an emoji that matches the review
    if (review === 5) {
      return 'đ¤Š';
    } else if (review === 4) {  
      return 'đ';
    }else if (review === 3) {
      return 'đ';
    }else if (review === 2) {
      return 'âšī¸';
    } else {
      return 'đ¤Ŧ';
    }
  },
};
