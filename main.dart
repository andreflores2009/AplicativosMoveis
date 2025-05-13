import 'package:flutter/material.dart';
import 'exemplos/exemplo01_stateless.dart';
import 'exemplos/exemplo02_stateful.dart';
import 'exemplos/exemplo03_formulario.dart'; // Novo import
import 'exemplos/exemplo04_cadastro.dart'; // Novo import
//preencher o import de listar

void main() {
  runApp(const MyApp());
}

// Widget principal do app
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: '/', // Rota inicial
      routes: {
        '/': (context) => const PrimeiraTela(), // Primeira tela
        '/segunda': (context) => const SegundaTela(), // Segunda tela
        '/formulario': (context) => const FormularioBasicoPage(), // Nova tela de formulário
        '/cadastro': (context) => const CadastroClientePage(), // Nova rota de cadastro
        // preencher a rota de listar

      },
    );
  }
}
