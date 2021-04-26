/**
 * List handler for orders resources
 */

const OrdersService = require("./orders.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
// function hasData(req, res, next) {
//   const methodName = "hasData";
//   req.log.debug({ __filename, methodName, body: req.body });

//   if (req.body.data) {
//     req.log.trace({ __filename, methodName, valid: true });
//     return next();
//   }
//   const message = "body must have data property";
//   next({ status: 400, message: message });
//   req.log.trace({ __filename, methodName, valid: false }, message);
// }
// function dataHas(propertyName) {
//   const methodName = `dataHas('${propertyName}')`;
//   return (req, res, next) => {
//     req.log.debug({ __filename, methodName, body: req.body });
//     const { data = {} } = req.body;
//     const value = data[propertyName];
//     if (value) {
//       req.log.trace({ __filename, methodName, valid: true });
//       return next();
//     }
//     const message = `Article must include a ${propertyName}`;
//     next({ status: 400, message: message });
//     req.log.trace({ __filename, methodName, valid: false }, message);
//   };
// }

// const hasFirstName = dataHas("first_name");
// const hasLastName = dataHas("last_name");
// const hasMobileNumber = dataHas("mobile_number");
// const hasReservationDate = dataHas("reservation_date");
// const hasReservationTime = dataHas("reservation_time");
// const hasPeople = dataHas("people");

async function create(req, res) {
  const newOrder = await OrdersService.create(req.body.data);

  res.status(201).json({
    data: newOrder[0],
  });
}
//   async function update(req, res) {
//     const updatedReservation = await ReservationService.update(req.body.data);

//     res.status(200).json({
//       data: updatedReservation[0],
//     });
//   }

async function list(req, res) {
  console.log("orders in controller");
  const methodName = "list";
  req.log.debug({ __filename, methodName });

  //   const { order = null } = req.query;
  //   const data = await OrdersService.list(order);

  //   res.json({ data: data });
  res.json({ data: "Hello from Hook Razor Server" });
  req.log.trace({ __filename, methodName, return: true, data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
