const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db.sqlite3");

// TODO: insertStudent birden fazla öğrenci ekleme olanağı olucak (belki insertStudents bir class olur ve .insert ile .insertMany şeklinde iki ayrı fonksiyon ile hallolur)

function insertStudent(schoolNumber, name, surname, password, scClass) {
  const crypto = require("crypto");
  password =
    password === null
      ? null
      : crypto.createHash("sha256").update(password).digest("hex");
  db.serialize(() => {
    db.run(
      `INSERT INTO students VALUES(${schoolNumber}, '${name}', '${surname}', '${password}', ${scClass});`
    );
    console.log("number ", schoolNumber, " student inserted success!");
  });

  db.close();
}
