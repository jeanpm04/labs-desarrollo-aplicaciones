import reflex as rx


class EstadoContador(rx.State):
    conteo: int = 0  # Inicializa el conteo en 0

    def incrementar(self):
        self.conteo += 1  # Aumenta el conteo en 1

    def disminuir(self):
        self.conteo -= 1  # Disminuye el conteo en 1


def contador() -> rx.Component:
    """Componente del contador que muestra el conteo y los botones."""
    return rx.fragment(
        rx.hstack(
            rx.button("Incrementar", on_click=EstadoContador.incrementar),
            rx.text(EstadoContador.conteo),  # Mostrar el conteo actual
            rx.button("Disminuir", on_click=EstadoContador.disminuir),
        )
    )


def index() -> rx.Component:
    return rx.container(
        rx.color_mode.button(position="top-right"),
        rx.vstack(
            rx.heading("Contador", size="9"),
            rx.text("Este es un contador simple:"),
            contador(),  # Agregar el componente del contador a la página
            spacing="5",
            justify="center",
            min_height="85vh",
        ),
        rx.logo(),
    )


app = rx.App()
app.add_page(index)
