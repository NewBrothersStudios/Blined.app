<script>
function comprar(paquete, precio) {
    const mensaje = encodeURIComponent(
        `Hola, quiero comprar ${paquete} por $${precio}.`
    );

    // TU NÚMERO AQUÍ 🔽
    const numero = "50373826693";

    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
}
</script>