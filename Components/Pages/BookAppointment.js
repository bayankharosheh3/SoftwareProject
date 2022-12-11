import { Text, StyleSheet, View, Platform } from "react-native";
import React, { Component } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';

export default class BookAppointment extends Component {
  state = {
    date: new Date(),
    dateValue: "",
    timeValue: "",
    show: false,
  };

  handelChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({ show: Platform.OS === "ios" ? true : false });
    this.setState({ date: currentDate });
    console.log(this.state.date);
  };
  render() {
    return (
      <View>
        <Text>BookAppointment</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={this.state.date}
          mode="date"
          display="default"
          onChange={this.handelChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
