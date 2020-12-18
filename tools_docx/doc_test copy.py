import json
import sys

from docxtpl import DocxTemplate


def get_doc_file(template_path, file_path, save_path, filename):
    try:
        with open(file_path, 'r', encoding='utf8') as f:
            json_data = json.load(f)
        if isinstance(json_data, list):
            i = 1 
            for item in json_data:
                doc = DocxTemplate(template_path)
                doc.render(item)
                doc.save(save_path + str(i) + "__" + filename)
                print('生成word %d 成功' % (i,) )
                i = i + 1
        elif isinstance(json_data, dict):
            doc_one = DocxTemplate(template_path)
            doc_one.render(json_data)
            doc_one.save(save_path + "_" + filename)
            print('生成word成功')
    except Exception as e:
        print(e)

if __name__ == "__main__":
    # print(sys.argv)
    # template_path = sys.argv[1]
    # file_path = sys.argv[2]
    # save_path = sys.argv[3]
    # filename = sys.argv[4]
    # get_doc_file(template_path, file_path, save_path, filename)
    get_doc_file("C://Users//Administrator//Desktop//my_word_template.docx", "C://Users//Administrator//Desktop//etest//test_data//pro.json", "D://","fi12lename.docx")
