const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

const serializeLedger = (ledger) => JSON.stringify(ledger);
const loadLedger = (json) => JSON.parse(json);

const checkoutDevice = (ledger, assetTag, borrower) => {
  if (!Object.hasOwn(ledger, assetTag)) {
    return { ledger, message: `${assetTag} not found` };
  } 
  if (ledger[assetTag].status === "CheckedOut") {
    return { ledger, message: `${assetTag} already checked out` }
  }

  let copy = loadLedger(serializeLedger(ledger));
  copy[assetTag].borrower.name = borrower.name;
  copy[assetTag].borrower.email = borrower.email;
  copy[assetTag].status = "CheckedOut"

  return { ledger: copy, message: `includes ${assetTag} and ${borrower.name}`}
}

const checkinDevice = (ledger, assetTag) => {
  if (!Object.hasOwn(ledger, assetTag)) {
    return { ledger, message: `${assetTag} is not found`}
  }

  let copy = loadLedger(serializeLedger(ledger));

  copy[assetTag].borrower.name = ""; 
  copy[assetTag].borrower.email = ""; 
  copy[assetTag].dueDate = ""; 
  copy[assetTag].status = "CheckedIn";

  return {ledger: copy, message: `tag is found: ${assetTag} asdf`} 
}

const toNumber = (dateString) => {
  let [months, day, year] = dateString.split('/');

  return Number(year) * 10000 + Number(months) * 100 + Number(day);
}

const listOverdueDevices = (ledger, today) => {
  const todayNum = toNumber(today);
  const overdue = [];
  const devices = Object.values(ledger);

  devices.forEach((device) => {
    if (
      device.status === "CheckedOut" && 
      toNumber(device.dueDate) < todayNum
      ) {
        overdue.push(device);
    }
  });
  overdue.sort((a, b) => toNumber(a.dueDate) - toNumber(b.dueDate));

  return overdue;

}

