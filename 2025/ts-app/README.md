# Configuración de TypeScript con ts-node

## Obtener .gitignore  
Puedes generar un archivo `.gitignore` recomendado para tu proyecto desde:  
[🔗 Toptal Gitignore Generator](https://www.toptal.com/developers/gitignore)

## Instalar y configurar TypeScript con `ts-node`

### 1. Usar Node.js 18 (si tienes `nvm` instalado)
```sh
nvm use 18
```

### 2. Inicializar un proyecto Node.js
```sh
npm init -y
```

### 3. Instalar TypeScript como dependencia de desarrollo
```sh
npm install typescript --save-dev
```

### 4. Verificar la versión de TypeScript
```sh
npx tsc --version
```

### 5. Generar el archivo de configuración `tsconfig.json`
```sh
npx tsc --init
```

### 6. Compilar TypeScript (opcional)
```sh
npx tsc
```

### 7. Instalar `ts-node`
[ ts-node en npm](https://www.npmjs.com/package/ts-node)  
[ TypeStrong - ts-node](https://typestrong.org/ts-node)  

```sh
npm install -D ts-node
```

### 8. Ejecutar un archivo TypeScript con `ts-node`
```sh
npx ts-node src/demo.ts
```

#  TypeScript: Funciones e Interfaces

##  Funciones

- **Parámetros opcionales**: Se utilizan con `?`, y el operador **Nullish Coalescing (`??`)** permite asignar valores por defecto en caso de `null` o `undefined`.  
- **Parámetros por defecto**: Se asignan valores predeterminados a los parámetros de la función.  
- **Parámetros rest**: Se usa `...` para agrupar múltiples argumentos en un array.  
- **Sobrecarga de métodos**: Permite definir múltiples firmas de función para manejar diferentes tipos de entrada.  

## Interfaces

- **Interfaces**: Definen la estructura de los objetos en TypeScript.  
- **Estructuras complejas**: Interfaces que pueden contener funciones, arreglos u objetos anidados.  
- **Extender interfaces**: Se usa `"extends"` para heredar propiedades de otra interfaz.  
- **Solo lectura**: Se usa `"readonly"` para definir propiedades inmutables.  

