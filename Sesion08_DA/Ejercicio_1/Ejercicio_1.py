import reflex as rx

class State(rx.State):
    mostrar_solo_pendientes: bool = False  # Inicializado en False, mostrando solo tareas completadas

    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes

tareas = [
    {"titulo": "Tarea 1", "estado": "Pendiente"},
    {"titulo": "Tarea 2", "estado": "Completado"},
    {"titulo": "Tarea 3", "estado": "Pendiente"},
    {"titulo": "Tarea 4", "estado": "Completado"},
    {"titulo": "Tarea 5", "estado": "Pendiente"},
]

def tarjeta_tarea(tarea):
    return rx.table.row(
        rx.table.cell(tarea["titulo"]),
        rx.table.cell(tarea["estado"]),
        style={"padding": "10px", "border-bottom": "1px solid #ddd"}
    )

def columna_kanban(nombre, tareas):
    return rx.box(
        rx.heading(nombre, size="md", style={"text-align": "center", "margin-bottom": "10px", "color": "#333"}),
        rx.table.root(
            rx.table.body(
                rx.foreach(
                    tareas,
                    tarjeta_tarea,
                )
            ),
        ),
        style={"flex": "1", "padding": "10px", "background-color": "#ffffff", "border-radius": "8px", "box-shadow": "0 2px 5px rgba(0, 0, 0, 0.1)"}
    )

# Filtrar tareas según el estado de la variable mostrar_solo_pendientes
def obtener_tareas_filtradas():
    return rx.cond(
        State.mostrar_solo_pendientes,
        [tarea for tarea in tareas if tarea["estado"] == "Pendiente"],  # Filtra solo tareas pendientes
        [tarea for tarea in tareas if tarea["estado"] == "Completado"]  # Retorna solo tareas completadas si mostrar_solo_pendientes es False
    )

# Componente principal de la página Kanban
def index():
    return rx.box(
        # Botón para alternar entre mostrar todas las tareas y solo las pendientes
        rx.button(
            rx.cond(
                State.mostrar_solo_pendientes,
                "Mostrar Todas las Tareas",
                "Mostrar Solo Pendientes"
            ),
            on_click=State.mostrar_pendientes,
            style={
                "margin-bottom": "20px",
                "padding": "10px 20px",
                "background-color": "#457b9d",
                "color": "#ffffff",
                "border": "none",
                "border-radius": "5px",
                "cursor": "pointer"
            }
        ),

        # Contenedor para el tablero Kanban
        rx.box(
            rx.hstack(
                columna_kanban("Tareas", obtener_tareas_filtradas()),  # Mostrar solo tareas filtradas
            ),
            style={
                "display": "flex",
                "justify-content": "center",
                "width": "80%",
                "margin": "0 auto",
                "gap": "20px",
            }
        ),
        
        style={
            "text-align": "center",
            "margin-top": "20px",
        }
    )

app = rx.App()
app.add_page(index)