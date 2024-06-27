class DatePicker {
  constructor(inputElement) {
    this.inputElement = inputElement;
    this.init();
  }

  init() {
    this.createDatePickerHTML();
    this.addEventListeners();
    this.currentDate = new Date();
    this.selectedDate = null;
    this.renderCalendar(this.currentDate);
  }

  createDatePickerHTML() {
    // Create a wrapper div and set it to relative
    const wrapperDiv = document.createElement("div");
    wrapperDiv.style.display = "inline-block";
    wrapperDiv.style.position = "relative";
    wrapperDiv.style.width = "fit-content";
    wrapperDiv.style.height = "fit-content";
    this.inputElement.parentNode.insertBefore(wrapperDiv, this.inputElement);
    wrapperDiv.appendChild(this.inputElement);

    // Create the datepicker container and set it to absolute
    const datepickerContainer = document.createElement("div");
    datepickerContainer.classList.add("datepicker-container");

    const datepickerCalendar = `
        <div class="datepicker-calendar">
            <div class="datepicker-header">
                <button type="button" class="datepicker-prev">&lt;</button>
                <span class="datepicker-month-year"></span>
                <button type="button" class="datepicker-next">&gt;</button>
            </div>
            <div class="datepicker-days">
                <div class="datepicker-day">Sun</div>
                <div class="datepicker-day">Mon</div>
                <div class="datepicker-day">Tue</div>
                <div class="datepicker-day">Wed</div>
                <div class="datepicker-day">Thu</div>
                <div class="datepicker-day">Fri</div>
                <div class="datepicker-day">Sat</div>
            </div>
            <div class="datepicker-dates"></div>
        </div>
    `;

    datepickerContainer.innerHTML = datepickerCalendar;
    wrapperDiv.appendChild(datepickerContainer);

    this.datepickerContainer = datepickerContainer;
    this.datepickerCalendar = datepickerContainer.querySelector(
      ".datepicker-calendar"
    );
    this.monthYearElement = datepickerContainer.querySelector(
      ".datepicker-month-year"
    );
    this.datesElement = datepickerContainer.querySelector(".datepicker-dates");
    this.prevButton = datepickerContainer.querySelector(".datepicker-prev");
    this.nextButton = datepickerContainer.querySelector(".datepicker-next");
  }

  addEventListeners() {
    this.inputElement.addEventListener("click", (event) => {
      event.stopPropagation();
      this.toggleDatepicker();
    });

    this.prevButton.addEventListener("click", (event) => {
      event.stopPropagation();
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.renderCalendar(this.currentDate);
    });

    this.nextButton.addEventListener("click", (event) => {
      event.stopPropagation();
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.renderCalendar(this.currentDate);
    });

    document.addEventListener("click", () => this.closeDatepicker());
  }

  toggleDatepicker() {
    this.datepickerCalendar.style.display =
      this.datepickerCalendar.style.display === "block" ? "none" : "block";
  }

  closeDatepicker() {
    this.datepickerCalendar.style.display = "none";
  }

  renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    this.monthYearElement.textContent = `${months[month]} ${year}`;

    // Clear existing dates
    this.datesElement.innerHTML = "";

    // Get the first day of the month
    const firstDayOfMonth = new Date(year, month, 1);
    const startingDay = firstDayOfMonth.getDay();

    // Calculate number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Fill in previous month's days if startingDay is not Sunday
    for (let i = 0; i < startingDay; i++) {
      const dateElement = this.createDateElement("", "disabled");
      this.datesElement.appendChild(dateElement);
    }

    // Fill in current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const className =
        this.selectedDate &&
        this.selectedDate.getDate() === day &&
        this.selectedDate.getMonth() === month &&
        this.selectedDate.getFullYear() === year
          ? "selected"
          : "";
      const dateElement = this.createDateElement(day, className);
      this.datesElement.appendChild(dateElement);
    }
  }

  createDateElement(day, className) {
    const dateElement = document.createElement("div");
    dateElement.classList.add("datepicker-date");
    if (className) {
      dateElement.classList.add(className);
    }
    dateElement.textContent = day;

    if (className !== "disabled") {
      dateElement.addEventListener("click", (event) => {
        event.stopPropagation();
        this.selectDate(day);
      });
    }

    return dateElement;
  }

  selectDate(day) {
    this.selectedDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      day
    );
    this.inputElement.value = this.formatDate(this.selectedDate);
    this.renderCalendar(this.currentDate);
    this.closeDatepicker();
  }

  formatDate(date) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.addEventListener("DOMContentLoaded", () => {
  const datepickerInputs = document.querySelectorAll(".datepicker-input");
  datepickerInputs.forEach((input) => new DatePicker(input));

  function closeDialog() {
    document.getElementById("dialog").style.display = "none";
    document.getElementById("dialog-overlay").style.display = "none";
  }

  function openDialog() {
    document.getElementById("dialog").style.display = "block";
    document.getElementById("dialog-overlay").style.display = "block";
  }
  document
    .getElementById("button")
    .addEventListener("click", () => openDialog());

  document
    .getElementById("closeBtn")
    .addEventListener("click", () => closeDialog());
});
