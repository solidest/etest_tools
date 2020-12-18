from docxtpl import DocxTemplate
import json
import sys


def get_doc_file(template_path, file_path, filename):
    try:
        with open(file_path, 'r', encoding='utf8') as f:
            json_data = json.load(f)
        i = 1 
        for item in json_data:
            doc = DocxTemplate(template_path)
            doc.render(item)
            doc.save(str(i) + "_" + filename)
            print('成功')
            i = i + 1
    except Exception as e:
        print(e)
if __name__ == "__main__":
    template_path = sys.argv[1]
    file_path = sys.argv[2]
    filename = sys.argv[3]
    get_doc_file(template_path, file_path, filename)