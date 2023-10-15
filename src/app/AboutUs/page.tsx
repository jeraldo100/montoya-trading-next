import React from 'react'
import styles from '@/styles/PagesCSS/AboutUs.module.scss';
import { roboto300, roboto700 } from '@/app/fonts';

function AboutUs() {
    return (
        <>
            <h1 className={`${styles.aboutH1} ${roboto300.className}`}>About Us</h1>
            <div className={styles.bodyBackground}>
                <h1 className={`${styles.MontoyaH1} ${roboto700.className}`}>Montoya Trading</h1>
                <p className={`${styles.paragraphs} ${roboto300.className}`}>
                    Suspendisse tristique orci nisi, et ultricies elit varius at. Nulla posuere sem odio, ac feugiat dui blandit eget. Maecenas accumsan quam at gravida dictum. Etiam tempus nibh vel turpis pellentesque, semper aliquet enim efficitur. Aenean efficitur vel quam sit amet finibus. Suspendisse potenti. Integer a mi tempor metus tristique aliquet eget ut eros. Praesent lectus felis, porta bibendum erat mattis, ultrices lacinia sapien.
                    <br /><br />
                    Nullam et odio ac dui facilisis finibus mollis a diam. Praesent turpis risus, placerat at finibus ut, placerat at ligula. Integer sed tellus sit amet lacus tincidunt tincidunt nec at odio. Nunc sed cursus magna. Curabitur vitae viverra ligula. Phasellus ac ullamcorper ante, at interdum augue. Curabitur gravida orci vel eros suscipit mollis. Curabitur aliquet, lacus sed malesuada pretium, purus dolor gravida nunc, nec rutrum tellus leo nec magna. Sed vel lobortis leo, quis dapibus nibh. Ut ut fringilla mauris, sed imperdiet magna.
                    <br /><br />
                    Etiam ac elementum est. Suspendisse eget vehicula odio. Vivamus hendrerit egestas tellus, sed volutpat lectus suscipit id. Mauris gravida nibh enim, vitae lobortis eros commodo id. Phasellus vulputate libero eu fermentum rhoncus. Aliquam quis auctor enim, sed pharetra urna. Duis molestie mauris at neque ultricies iaculis. Integer vel consectetur odio. Morbi nisi sapien, vulputate nec porta non, ornare at turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam a sagittis arcu, ac scelerisque elit. Aenean risus dui, laoreet ac egestas eu, eleifend non lorem. Suspendisse tincidunt eget ipsum tempus tincidunt. Morbi porttitor sit amet ligula eget laoreet. Nam at luctus eros.
                    <br /><br />
                    Integer volutpat diam vitae dui mattis, sit amet commodo erat volutpat. Etiam vel nisi faucibus, feugiat turpis in, mollis neque. Curabitur non viverra lorem. Suspendisse aliquam id nisl quis egestas. Ut semper velit vitae tempor placerat. Integer et congue dolor, ut bibendum est. Proin eu vestibulum ex.
                    <br /><br />
                    Nunc et quam sed mauris iaculis venenatis ac a purus. Nam lobortis lorem non sem imperdiet, id posuere dolor tincidunt. Nam ex lectus, dictum eget metus semper, aliquet maximus nisi. Phasellus aliquam, nibh at mattis congue, lectus odio semper purus, nec blandit quam risus eget sapien. Fusce non purus sed est imperdiet venenatis id ut felis. Integer id mi ligula. Sed vel risus a lorem dapibus aliquam. Donec mattis vel enim vitae rhoncus. Fusce id nisi diam. Donec laoreet massa in viverra auctor. Aenean tempus est egestas urna finibus, eu suscipit lacus blandit. Vestibulum tincidunt lacus id felis volutpat, non hendrerit mauris consequat. Vivamus sagittis ligula quis ante rutrum viverra.
                </p>
            </div>

        </>
    )
}

export default AboutUs