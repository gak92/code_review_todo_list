export default class LocalStorage {
  static getData = () => JSON.parse(localStorage.getItem('taskslist'));

  static saveData = (tasksList) => {
    localStorage.setItem('taskslist', JSON.stringify(tasksList));
  }
}
