"use strict";
process.on('unhandledRejection', (reason) => {
    console.log(`Unhandled Rejection: ${reason.message || reason}`);
    throw new Error(reason.message || reason);
});
//# sourceMappingURL=process.js.map