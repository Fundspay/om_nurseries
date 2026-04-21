export const rfidScanData = Array.from({ length: 324 }, (_, index) => {
  const serial = index + 1;

  const unitNumber = String((serial % 5) + 1).padStart(2, "0");
  const blockNumber = String((serial % 3) + 1).padStart(2, "0");

  const hour = String((8 + (serial % 10)) % 24).padStart(2, "0");
  const minute = String((serial * 3) % 60).padStart(2, "0");
  const second = String((serial * 7) % 60).padStart(2, "0");

  const day = String((serial % 28) + 1).padStart(2, "0");
  const month = String(((serial % 12) + 1)).padStart(2, "0");
  const year = "26";

  return {
    id: serial,
    rfid: `OM-${String(1000 + serial).slice(-4)}-${String(100 + (serial % 900)).slice(-3)}-${String(100 + ((serial * 2) % 900)).slice(-3)}`,
    time: `${hour}:${minute}:${second}`,
    date: `${day}/${month}/${year}`,
    unit: `Unit ${unitNumber}`,
    block: `Block ${blockNumber}`,
    placed: false,
  };
});