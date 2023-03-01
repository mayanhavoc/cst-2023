import { c as create_ssr_component } from "./index2.js";
const metadata = {
  "id": "0010",
  "title": "Staking, delegación, stake pools y la billetera Eternl",
  "date": "2022-09-29",
  "categories": ["Cardano", "Teaching", "Español", "Cardano sin tecnicismos"]
};
const _0005 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>¿Que es una billetera ligera?**</h2>
<h3>Extensiones/mobile apps</h3>
<ul><li>Instalar</li></ul>
<h2>Interface</h2>
<h3>Inicio</h3>
<ul><li>Información del Epoch</li>
<li>Mainnet/Testnet</li>
<li>Anuncios</li>
<li>FAQ</li>
<li>Preferencias</li></ul>
<h3>Agregar billetera</h3>
<h3>Crear billetera (¿Qué es una billetera caliente?)</h3>
<ul><li>Una billetera caliente es aquella en donde sus llaves privadas están en el dispositivo en donde esta la billetera</li>
<li>Respaldo en caso le suceda algo al dispositivo</li>
<li>Contraseña robusta</li>
<li>Recomendación: Billetera hardware</li>
<li>Frase semilla</li>
<li><strong>Ir a manejo de billetera (Restaurar billetera va después)</strong></li></ul>
<h3>Frase semilla - Sebastian de Individuo Digital</h3>
<ol><li>Resguardar de</li></ol>
<ul><li>Fuego</li>
<li>Agua</li>
<li>Paso del tiempo</li>
<li>Ojos ajenos</li>
<li>Emparejar con hardware ledger<ul><li>Nano S o X</li>
<li>Trezor</li>
<li><a href="${"https://www.youtube.com/watch?v=IGP4RX-DnNQ"}" rel="${"nofollow"}">Conecta al puerto USB y exportamos llave publica</a></li></ul></li></ul>
<h3>Manejo billetera</h3>
<h4>Manejo billetera (Sumario)</h4>
<ul><li><p>Privacidad</p></li>
<li><p>Sincronización</p></li>
<li><p>Resumen</p>
<ul><li>Balance</li>
<li>Ada + rewards</li></ul></li>
<li><p>dApp connector</p>
<ul><li>e.g., para Dex</li></ul></li>
<li><p>Retirar recompensas</p>
<ul><li>No es necesario si no necesitan mover todos los fondos, evitar comisiones</li>
<li>Resumen grafico de recompensas</li></ul></li>
<li><p>Delegación</p>
<ul><li>Época</li>
<li>Pool</li>
<li>Saturation</li>
<li>Pledge</li>
<li>Comisiones</li>
<li>ROS</li></ul></li></ul>
<h4>Manejo billetera (Tokens)</h4>
<ul><li>Tokens de billetera</li>
<li>PolicyID</li></ul>
<h4>Manejo billetera (UTxO)</h4>
<ul><li>Resumen de outputs de direccional</li></ul>
<h4>Lista de cuentas</h4>
<ul><li>Delegar a multiples pools desde una sola billetera</li></ul>
<h4>Transacciones</h4>
<p><em>Inputs, outputs e ID de transacción</em> - útil para seguimiento</p>
<h4>Envío</h4>
<ul><li>Facilidad de uso</li></ul>
<h4>Recibir</h4>
<ul><li>Direcciones disponibles</li></ul>
<h4>Staking</h4>
<ul><li>Pools</li>
<li>Delegación</li>
<li>Información básica<ul><li>Saturacion</li>
<li>Pledge</li>
<li>Comision</li>
<li>Retorno</li></ul></li>
<li>Links<ul><li>Cardanoscan</li>
<li>Social media</li></ul></li></ul>
<h3>Votacion</h3>
<ul><li>Sistema de gobernanza de Cardano</li></ul>
<h3>Configuracion</h3>
<ul><li>Nombre de billetera</li>
<li>Grupos de billeteras - util para categorizar billeteras (i.e. Dex, testnet, ledger, etc)</li>
<li>Contraseña de acceso a billetera (diferente a contraseña de firma) - capa extra de proteccion</li>
<li>Icono</li>
<li>Directorio de direcciones - facilita acceso a direccion</li>
<li>Colateral - fondo de la billetera que queda disponible para contratos inteligentes (5 Adas), normalmente lo piden los Dex’s - todas las txs tienen que tener un costo por el problema de <em>Nothing at stake</em></li>
<li>Single address mode<ul><li>Una billetera con una direccion -&gt; sirve para interactuar con otras billeteras como Nami</li>
<li>Fragmentación de tokens<ul><li>Para que los tokens nativos puedan dividirse correctamente como output del UTxO</li></ul></li></ul></li>
<li>Auto-retiro de recompensas</li>
<li>Envio todo<ul><li>Dejar apagado por seguridad</li></ul></li>
<li>Resincronizar billetera</li>
<li>Borrar o <em>un-stake</em></li></ul>`;
});
export {
  _0005 as default,
  metadata
};
