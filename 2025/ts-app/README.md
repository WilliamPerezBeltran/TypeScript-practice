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
