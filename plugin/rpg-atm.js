const saldoplus = 1;
let handler = async (m, { Lyrra, command, args }) => {
  let count = command.replace(/^atm/i, "");
  count = count
    ? /all/i.test(count)
      ? Math.floor(global.db.data.users[m.sender].saldo / saldoplus)
      : parseInt(count)
    : args[0]
      ? parseInt(args[0])
      : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].saldo >= saldoplus * count) {
    global.db.data.users[m.sender].saldo -= saldoplus * count;
    global.db.data.erpg[m.sender].bank += count;
    m.reply(`-${saldoplus * count} saldo\n+ ${count} ATM`);
  } else
    m.reply(`saldo tidak mencukupi untuk menabung ${count} ATM`);
};
handler.help = ["atm", "atmall"];
handler.tags = ["rpg"];
handler.command = ["atm", "atmall"];

module.exports = handler;
