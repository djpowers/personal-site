module.exports = {
  currentYear() {
    const today = new Date();
    return today.getFullYear();
  },
  daysUntilVaccinated() {
    return Math.ceil(
      (new Date("05/15/2021") - new Date()) / (1000 * 3600 * 24)
    );
  },
};
