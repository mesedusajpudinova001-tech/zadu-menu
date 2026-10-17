# ZÁDU — сайт кофейни

Основной адрес: https://zadu.com.ru/

Сайт опубликован в отдельном репозитории `zadu-menu` через GitHub Pages.
Домен зарегистрирован в Timeweb, подтверждён в профиле GitHub и подключён
только к этому репозиторию. Включён Enforce HTTPS.

## Распечатанный QR-код

Постоянный адрес уже распечатанного QR-кода:
https://mesedusajpudinova001-tech.github.io/mesedu.portfolio/zadu/

HTML-страницы по старым путям `mesedu.portfolio/zadu/` направляют посетителя
на соответствующие страницы https://zadu.com.ru/. Параметры ссылки и якорь
сохраняются. Сам QR-код менять не требуется.

Для работы напечатанного QR сохраняйте аккаунт `mesedusajpudinova001-tech`,
репозиторий `mesedu.portfolio`, публикацию GitHub Pages и старые пути `zadu/`.
Домен кофейни и файл CNAME относятся к `zadu-menu`.
Файлы личного портфолио вне старых страниц ZÁDU сохранены.

## Публикация и обновление меню

GitHub Pages: Settings → Pages → Deploy from a branch → main → /(root).
Custom domain: `zadu.com.ru`. Файл `CNAME` в корне содержит это имя.

Обновления меню вносите в `zadu-menu`:

- данные: `interior/menu/menu-data.json`;
- генерация страниц: `python scripts/render-menu.py`;
- главная: `interior/index.html`;
- фотографии блюд: `assets/dishes/`;
- контакт WhatsApp: https://wa.me/79282249222.

Оформление, фотографии, цены, описания, КБЖУ и контакты перенесены из
версии `fd21ef5ce5511e5d2fcfb184312579fff71e56e4` от 15 октября 2026 года.

## DNS в Timeweb

Во всех записях TTL — 600. Для самого `zadu.com.ru` поле «Хост»
в Timeweb оставляется пустым. Окончание домена панель добавляет сама.

| Тип | Хост в Timeweb | Значение |
| --- | --- | --- |
| A | пусто | 185.199.108.153 |
| A | пусто | 185.199.109.153 |
| A | пусто | 185.199.110.153 |
| A | пусто | 185.199.111.153 |
| AAAA | пусто | 2606:50c0:8000::153 |
| AAAA | пусто | 2606:50c0:8001::153 |
| AAAA | пусто | 2606:50c0:8002::153 |
| AAAA | пусто | 2606:50c0:8003::153 |
| CNAME | www | mesedusajpudinova001-tech.github.io |
| TXT | _github-pages-challenge-mesedusajpudinova001-tech | 129c69584dfb4cf8494b7a8618d1a7 |

TXT сохраняет подтверждение домена. Значение CNAME — имя аккаунта
на github.io без имени репозитория и без https://.

Проверяйте оба типа адресов: A и AAAA. Все они должны вести на GitHub Pages.
Оставшийся IPv6-адрес парковки Timeweb
`2a03:6f00:1::5c35:60df` приводил к открытию парковки и мешал выпуску HTTPS.
После исправления в публичном DNS должны оставаться четыре AAAA GitHub
из таблицы. Существующие почтовые и прочие несвязанные записи сохраняйте.

Для текущего размещения дополнительный платный хостинг и платный
SSL-сертификат не требуются.

## Проверка

На домене проверены 53 опубликованных файла, включая все 15 HTML-страниц
и 30 изображений: HTTPS, код ответа 200, точное совпадение с исходной версией.
Старые пути изменены только в 15 HTML-файлах переходов; остальные 52 файла
исходного репозитория сохранены.

## Официальные инструкции

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
