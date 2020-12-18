## Word模板的语法使用

#### 基本语法
- 变量的取值 {{  }} 
- 控制结构 {%  %}
- 注释{#  #}
### 过滤器

- title: 把值中每个单词的首字母都转换成大写
- trim: 把值的首尾空格去掉
- join: 拼接多个值为字符串
- round: 默认对数字进行四舍五入，也可以用参数进行控制
- capitialize: 把值的首字母转换成大写，其他子母转换为小写
- lower: 把值转换成小写形式
- upper: 把值转换成大写形式

    ```
    {{ 'abc' | captialize}}
    # Abc

    {{ 'abc' | upper  }}
    # ABC
 
    {{ 'hello world' | title  }}
    # Hello World
    
    {{ "hello world" | replace('world','daxin') | upper }}
    # HELLO DAXIN
    ```
- `变量可以通过“过滤器”进行修改，过滤器可以理解为内置函数和字符串处理函数`
- ` 更多的过滤器用法请参见jinja2过滤器`
### for循环
- 
    ```
    # 迭代数组
    {% for item in [1,2,3] %}
        逻辑循环
        {{ item }}
    {% endfor %}

    # 1 2 3

    # 迭代字典
    {% for key, value in my_dict.iteritems() %}
        {{ key }}
        {{ value}}
    {% endfor %}
    ```
    变量|内容
    -|-
    loop.index|	循环迭代计数（从1开始）
    loop.index0	| 循环迭代计数（从0开始）
    loop.revindex	|循环迭代倒序计数（从len开始，到1结束）
    loop.revindex0|	循环迭代倒序计数（从len－1开始，到0结束）
    loop.first|	是否为循环的第一个元素
    loop.last	|是否为循环的最后一个元素
    loop.length|	循环序列中元素的个数
    loop.cycle|	在给定的序列中轮循，如上例在”odd”和”even”两个值间轮循
    loop.depth|	当前循环在递归中的层级（从1开始）
    loop.depth0	|当前循环在递归中的层级（从0开始）

### if 条件
- 
    ```
    {% if ... %}
        逻辑1
    {% elif ... %}
        逻辑2
    {% else %}
        逻辑3
    {% endif %}

    ```
### 比较运算符
- 
    运算符|含义
    -|-
    == | 等于
    != | 不等于
    < | 小于
    > | 大于
    <= | 小于等于
    >= | 大于等于
### 布尔运算符
- 
    运算符| 含义
    -|-
    and| 与
    or| 或
    not|非
### 表格
- for循环中垂直合并单元格 {% vm %}
- for循环中水平合并单元格 {% hm %}
### 扩展 
- 为了管理段落、表行、表列、run，必须使用特殊的语法。（区别于jinja2）
- {%p jinja2_tag %} for paragraphs
- {%tr jinja2_tag %} for table rows
- {%tc jinja2_tag %} for table columns
- {%r jinja2_tag %} for runs
- `不要使用2次{%p、 {%tr、{%tc 、{%r在同一段落中，行、列或run `
- ` 不要使用这个 {%p if display_paragraph %}Here is my paragraph {%p endif %}`
- 手动剥离模板中的空白,在块（比如一个 for 标签、一段注释或变 量表达式）的开始或结束放置一个减号（ - ）
    ```
    {% for item in seq -%}
        {{ item }}
    {%- endfor %}
    ```
`更多语法请参见jinja2官方文档中的模板语法`
### 可执行程序的参数配置
#### doc_test.exe 3个必传参数
- 1.模板的所在路径(举例： C://Users//Administrator//Desktop//my_word_template.docx)
- 2.生成word所需要的json文件所在路径(举例： C://Users//Administrator//Desktop//pro.json)
- 3.生成word的路径及文件名称(举例: D://fi12lename.docx)
- `举例： doc_test.exe C://Users//my_word_template.docx C://Users//pro.json D://fi12lename.docx`
#### python_json.exe 1个必传参数
- json文件的所在路径
    ```json
    {
        "hisloader_path": "C://Users//Administrator//Desktop//etest//test_data//pro.json", //hisloader.exe生成json的路径
        "test_data": "D://name.json", //生成测试信息的json
        "project_name": "测试项目_39", //项目名称
        "test_case_json": "D://test_case.json", //生成测试用例的json
        "pro_file_path": "D://pro_file.json" //生成项目的json
    }
    ```
- `举例：python_json.exe  C://Users//xxx.json`
### hisloader.exe 3个必穿参数
- 1.xml所在的文件夹
- 2.生成json的路径
- 3.生成json的名称
- `举例: hisloader.exe "D:\test" "D:\\" "xxx"`