'use strict';


/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */

function gather(str) {
    let args = [str];
    let position = [];

    const gatherFunction = (nextStr) => {
        args.push(nextStr);
        return gatherFunction;
    };

    gatherFunction.order = (...order) => {
        if (order.length == 1) {
            position.push(order);
        }
        const orderFunction = (nextIndex) => {
            position.push(nextIndex);
            return gatherFunction.order(...position, args[nextIndex]);
        };

        orderFunction.get = () => {
            let rsl = "";
            for (let index = 0; index < position.length; index++) {
                rsl += args[position[index]]
            }
            return rsl;
        };
        return orderFunction;
    };
    return gatherFunction;
}

module.exports = gather;
