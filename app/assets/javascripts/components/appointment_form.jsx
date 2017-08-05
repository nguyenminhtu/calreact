const AppointmentForm = React.createClass({
  handleChange: function (e) {
    var name = e.target.name;
    appointment = {};
    appointment[name] = e.target.value;
    this.props.onInputChange(appointment);
  },

  setApptTime: function (e) {
    var name = 'appt_time';
    var appointment = {};
    if (appointment[name] = e.toDate()) {
      this.props.onInputChange(appointment);
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();

    this.props.onFormSubmit();
  },

  render: function () {
    var inputProps = {
      name: 'appt_time'
    }

    return (
      <div>
        <h3>Make a new appointment</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Appointment title..."
            value={this.props.title}
            onChange={this.handleChange}
          />
          <Datetime
            input={false}
            open={true}
            inputProps={inputProps}
            value={this.props.appt_time}
            onChange={this.setApptTime}
          />
          <input
            type="submit"
            value="Make appointment"
            className='submit-button'
          />
        </form>
      </div>
    )
  }
})
