var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statuses.inProgress);
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "not started";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.InProgress);
