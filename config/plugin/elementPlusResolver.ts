/**
 * 按需引入
 * https://element-plus.gitee.io/zh-CN/guide/quickstart.html
 * https://github.com/sxzz/element-plus-best-practices/tree/db2dfc983ccda5570033a0ac608a1bd9d9a7f658
 */
// import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';

// const pathSrc = path.resolve(__dirname, 'src');

export default function configElementPlusResolverPlugin() {
    const elementPlusAutoImportPlugin = AutoImport({
        resolvers: [
            ElementPlusResolver(),
            IconsResolver({
                prefix: 'Icon',
            }),
        ],
        // dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    });
    const elementPlusResolverPlugin = Components({
        resolvers: [
            IconsResolver({
                enabledCollections: ['ep'],
            }),
            ElementPlusResolver(),
        ],
        // dts: path.resolve(pathSrc, 'components.d.ts'),
    });
    return [
        elementPlusAutoImportPlugin,
        elementPlusResolverPlugin,
        Icons({
            autoInstall: true,
        }),
    ];
}
