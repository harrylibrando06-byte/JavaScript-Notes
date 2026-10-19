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

  return {ledger: copy, message: `tag is found: ${assetTag}`} 
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

// re-creation Book shelf version
const shelf = {
  "QA76": {
    title: "Eloquent JavaScript",
    state: "Available",
    reader: { name: "", email: "" },
    returnBy: ""
  }
};

// const shelfToText = (shelf) => JSON.stringify(shelf);
// const textToShelf = (shelf) => JSON.parse(shelfToText(shelf));
// const shelfDeepCopy = structuredClone(shelf); // I added this to try

const borrowBook = (shelf, callCode, reader) => {
  const clone = structuredClone(shelf);
  
  if (!Object.hasOwn(shelf, callCode)) {
    return { shelf, message: `${callCode} doesn't exist`};
  } else if (shelf[callCode].state === "Borrowed") {
    return { shelf, message: `${shelf[callCode].title} is ${shelf[callCode].state}`}
  } 
  
  clone[callCode].reader.name = reader.name;
  clone[callCode].reader.email = reader.email;
  clone[callCode].state = 'Borrowed';
  
  return { clone, message: `${clone[callCode].title} is ${clone[callCode].state}`};
};

const returnBook = (shelf, callCode) => {
  const clone = structuredClone(shelf);

  if (!Object.hasOwn(shelf, callCode)) {
    return { shelf, message: `${callCode} doesn't exist`};
  } else if (shelf[callCode].state !== 'Borrowed') {
    return { shelf, message: `${shelf[callCode].title} is available`}
  }
  
  clone[callCode].reader.name = '';
  clone[callCode].reader.email = '';
  clone[callCode].returnBy = '';
  clone[callCode].state = 'Available';

  return { clone, message: `${callCode} is available`}
}

const dateKey = (dateString) => {
  const toNumber = (dateString) => Number(dateString);

  const [month, day, year] = dateString.split('/');
  // return toNumber(year) * 10000 + toNumber(month) * 100 + toNumber(day);
  return toNumber(month) * 100 + toNumber(day) + toNumber(year) * 10000;
};