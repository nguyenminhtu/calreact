const Appointments = React.createClass({
  getInitialState: function () {
    return {
      appointments: this.props.data,
      title: '',
      appt_time: 'Tomorrow at 9 AM'
    }
  },

  handleInputChange: function (appointment) {
    this.setState(appointment);
  },

  addNewAppointment: function (appointment) {
    var appointments = React.addons.update(this.state.appointments, {$push: [appointment]});
    this.setState({
      appointments: appointments.sort(function (a, b) {
        return new Date(a.appt_time) - new Date(b.appt_time);
      }),
      title: '',
      appt_time: ''
    });
  },

  handleFormSubmit: function () {
    var appointment = {
      title: this.state.title,
      appt_time: this.state.appt_time
    };
    $.post('/appointments', {appointment: appointment})
      .done(function (data) {
        this.addNewAppointment(data);
      }.bind(this));
  },

  render: function () {
    return (
      <div>
        <AppointmentForm
          title={this.state.title}
          appt_time={this.state.appt_time}
          onInputChange={this.handleInputChange}
          onFormSubmit={this.handleFormSubmit}
        />
        <AppointmentList
          appointments={this.state.appointments}
        />
      </div>
    )
  }
});
