/**
 * Defines the router for orders resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

console.log("orders in router");
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
